import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'hbs';
import * as hbsUtils from 'hbs-utils';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  ); 

  app.useStaticAssets(join(__dirname, '..', 'public')); //publid dir for storing static assets
  app.setBaseViewsDir(join(__dirname, '..', 'views'));  //views dir will contain templates
  hbs.registerPartials(join(__dirname, '..', 'views/layouts'));
  hbsUtils(hbs).registerWatchedPartials(join(__dirname, '..', 'views/layouts'));
  app.setViewEngine('hbs');                             //hbs template engine will be used to render HTML

  await app.listen(3000);
}

bootstrap();
