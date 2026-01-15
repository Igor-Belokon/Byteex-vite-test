import type { Schema, Struct } from '@strapi/strapi';

export interface BenefitAdvantage extends Struct.ComponentSchema {
  collectionName: 'components_benefit_advantages';
  info: {
    displayName: 'Advantage';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      ['sparkle', 'leaf', 'fabric', 'comfort']
    >;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface FaqQuestion extends Struct.ComponentSchema {
  collectionName: 'components_faq_questions';
  info: {
    displayName: 'Question';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface HeroAdvantage extends Struct.ComponentSchema {
  collectionName: 'components_hero_advantages';
  info: {
    displayName: 'Advantage';
    icon: 'bulletList';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      ['sparkle', 'leaf', 'fabric', 'comfort']
    >;
    text: Schema.Attribute.String;
  };
}

export interface HeroReview extends Struct.ComponentSchema {
  collectionName: 'components_hero_reviews';
  info: {
    displayName: 'Review';
  };
  attributes: {
    author: Schema.Attribute.String;
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<1>;
    subtitle: Schema.Attribute.String;
    text: Schema.Attribute.RichText;
  };
}

export interface InfoBanerDataBlock extends Struct.ComponentSchema {
  collectionName: 'components_info_baner_data_blocks';
  info: {
    displayName: 'DataBlock';
  };
  attributes: {
    discription: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
      ['sparkle', 'leaf', 'fabric', 'comfort']
    >;
    value: Schema.Attribute.String;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    displayName: 'CTA';
    icon: 'book';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface UserContentReview extends Struct.ComponentSchema {
  collectionName: 'components_user_content_reviews';
  info: {
    displayName: 'Review';
  };
  attributes: {
    author: Schema.Attribute.String;
    avatar: Schema.Attribute.Media<'images'>;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    subtitle: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface WorksOrderAnswer extends Struct.ComponentSchema {
  collectionName: 'components_works_order_answers';
  info: {
    displayName: 'Answer';
  };
  attributes: {
    color: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
      ['sparkle', 'leaf', 'fabric', 'comfort']
    >;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'benefit.advantage': BenefitAdvantage;
      'faq.question': FaqQuestion;
      'hero.advantage': HeroAdvantage;
      'hero.review': HeroReview;
      'info-baner.data-block': InfoBanerDataBlock;
      'shared.cta': SharedCta;
      'user-content.review': UserContentReview;
      'works-order.answer': WorksOrderAnswer;
    }
  }
}
