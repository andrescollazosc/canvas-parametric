import { SecondaryButtonModel } from './secondary-button.model';

export interface PromoboxModel {
  bannerImg?: string;
  blogType?: string;
  title?: string;
  authorImg?: string;
  authorName?: string;
  date?: string;
  description?: string;
  tags?: string;
  configBtn?: SecondaryButtonModel;
}
