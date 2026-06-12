import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripModule } from './modules/trip/trip.module';
import { ExpenseModule } from './modules/expense/expense.module';
import { UsersModule } from './modules/users/users.module';
import { ItineraryModule } from './modules/itinerary/itinerary.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService : ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [__dirname+ '/**/*.entity{.ts,.js}'],
        synchronize: true
      }),
      inject: [ConfigService]
    }),
    UsersModule,
    TripModule,
    ExpenseModule,
    ItineraryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
