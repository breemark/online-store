import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get("/")
  @Render('index')  // Render the HBS view
  index() {
    return {
      title: 'Home Page - Online Store'
    };
  }
  
  @Get("/about")
  @Render('about')
  about(){
    let viewData = [];
    viewData["description"] = "This is an about page";
    viewData["author"] = "Developer by Maximiliano Torres";
    let data1 = 'About us - Online Store';
    return {
      title: data1,
      subtitle: "About us",
      viewData: viewData
    };
  }
}