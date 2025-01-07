import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { api } from '@/api/api';

const authOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { 
          label: "Email", 
          type: "email",
          placeholder: "seu@email.com"
        },
        senha: { 
          label: "Senha", 
          type: "password",
          placeholder: "Sua senha"
        }
      },
      async authorize(credentials) {
        try {
          const response = await api.post('/auth/login', {
            email: credentials.email,
            senha: credentials.senha
          });

          const data = response.data;
          
          if (!data || !data.user) {
            throw new Error('Resposta inválida do servidor');
          }

          return {
            id: data.user.id,
            email: data.user.email,
            nome: data.user.nome,
            accessToken: data.access_token
          };

        } catch (error) {
          if (error.response?.data?.message) {
            throw new Error(error.response.data.message);
          }
          throw new Error('Erro na autenticação');
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          accessToken: user.accessToken,
          userId: user.id,
          nome: user.nome
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.userId,
          nome: token.nome,
          accessToken: token.accessToken
        }
      };
    }
  },
  pages: {
    signIn: '/login',
    error: '/auth/error',
    signOut: '/logout'
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development'
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
