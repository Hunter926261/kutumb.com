import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module'; // ✅ ADD THIS

@Module({
  imports: [AuthModule], // ✅ INTEGRATE HERE
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
