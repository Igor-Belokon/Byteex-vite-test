import type { Schema, Struct } from '@strapi/strapi';

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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'hero.advantage': HeroAdvantage;
      'shared.cta': SharedCta;
    }
  }
}
