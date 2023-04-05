import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get("/")
  @Render('index')  // Render the HBS view
  index() {
    let viewData = [];
    viewData['title'] = 'Home Page - Online Store'; 
    return {
      viewData: viewData
    };
  }
  
  @Get("/about")
  @Render('about')
  about(){
    const viewData = [];
    viewData['title'] = 'About us - Online Store';
    viewData['subtitle'] = 'About us';
    viewData["description"] = "This is an about page";
    viewData["author"] = "Developer by Maximiliano Torres";
    return {
      viewData: viewData
    };
  }

}