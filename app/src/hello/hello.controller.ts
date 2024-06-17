// src/hello/hello.controller.ts

import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller('hello')
export class HelloController {
  @Get()
  getHello(@Res() res: Response): void {
    res.sendFile(join(__dirname, '..', '..', 'public', 'index.html'));
  }
}
