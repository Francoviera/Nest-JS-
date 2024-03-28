import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShiftModule } from './shift/shift.module';
import { PersonModule } from './person/person.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist';

@Module({
  imports: [
    ShiftModule,
    PersonModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'admin',
      password: 'root',
      database: 'db_crud',
      entities: [],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
