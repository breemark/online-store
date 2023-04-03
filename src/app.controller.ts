import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get("/")
  @Render('index')  // Render the HBS view
  index() {}        // index method will render the index view.
}