import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getApiInfo() {
    return {
      name: 'Nexus API',
      version: '1.0.0',
      status: 'online'
    };
  }

  getHealth() {
    return {
      status: 'healthy',
      uptime: process.uptime()
    };
  }
}
