import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './models/products.service';
import { Product } from './models/product.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: process.env.DATABASE_NAME,
      entities: [],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Product]),
  ],
  controllers: [AppController, ProductsController],
  providers: [ProductsService],
})
export class AppModule {}

//TODO find a better way to make the TypeORM config. What is the best way to do this?
