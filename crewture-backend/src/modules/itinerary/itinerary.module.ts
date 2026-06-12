import { Module } from '@nestjs/common';
import { ItineraryService } from './itinerary.service';
import { ItineraryController } from './itinerary.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItineraryItem } from './entities/itineraryItem.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItineraryItem])],
  controllers: [ItineraryController],
  providers: [ItineraryService],
})
export class ItineraryModule {}
