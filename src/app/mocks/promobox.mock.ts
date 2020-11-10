import { PromoboxModel } from '../models/promobox.model';

export class PromoboxMock {
  private static promoboxData: PromoboxModel[] = [];

  public static getInfoPromoBox(): PromoboxModel[] {
    return (this.promoboxData = [
      {
        bannerImg: '../../../assets/img/first-banner.jpg',
        blogType: 'blog',
        title:
          'The Recession We Feared Is Happening. What Should Investors Do?',
        authorImg: '../../../assets/img/senior-dev.PNG',
        authorName: 'Andres Collazos',
        date: 'Jun 03, 2020',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt enim nemo odio. Voluptatum aliquid illum veniam reprehenderit.',
        tags: 'C#, EntityFramework, TypeScript, CSS3, HTML5, JS',
        configBtn: {
          class: "btn-outline-tertiary",
          text: 'See...'
        }
      },
      {
        bannerImg: '../../../assets/img/second-banner.jpg',
        blogType: 'blog spot',
        title:
          'The Recession We Feared Is Happening. What Should Investors Do?',
        authorImg: '../../../assets/img/architect.PNG',
        authorName: 'Carlos Gonzales',
        date: 'Feb 20, 2020',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt enim nemo odio. Voluptatum aliquid illum veniam reprehenderit.',
        tags: 'C#, EntityFramework, JAVA, Node JS, TypeScript, CSS3, HTML5, JS',
        configBtn: {
          class: "btn-outline-primary",
          text: 'See All'
        }
      },
      {
        bannerImg: '../../../assets/img/third-banner.png',
        blogType: 'blog spot',
        title:
          'The Recession We Feared Is Happening. What Should Investors Do?',
        authorImg: '../../../assets/img/front-end.PNG',
        authorName: 'Tabia Bertolozi',
        date: 'May 10, 2020',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt enim nemo odio. Voluptatum aliquid illum veniam reprehenderit.',
        tags: 'TypeScript, CSS3, HTML5, JS',
        configBtn: {
          class: "btn-outline-secondary",
          text: 'See More'
        }
      },
      {
        bannerImg: '../../../assets/img/four-banner.jpg',
        blogType: 'blog spot',
        title:
          'The Recession We Feared Is Happening. What Should Investors Do?',
        authorImg: '../../../assets/img/avatar.png',
        authorName: 'Valentina Gomez',
        date: 'Jul 10, 2020',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt enim nemo odio. Voluptatum aliquid illum veniam reprehenderit.',
        tags: 'TypeScript, CSS3, HTML5, JS',
        configBtn: {
          class: "btn-outline-tertiary",
          text: 'BIO'
        }
      },
    ]);
  }
}
