
import component from './index';

import less from '!raw-loader!./index.less';
import templateStr from '!raw-loader!./index';

export default {
  component,
  templateStr,
  less,
  dataSource: {
    wrapper: {
      className: 'home-page-wrapper footer1-wrapper',
    },
    OverPack: {
      className: 'footer1',
      playScale: 0.2,
    },
    block: {
      className: 'home-page',
      gutter: 0,
      children: [
        {
          name: 'block0',
          xs: 24,
          md: 6,
          className: 'block',
          title: {
            className: 'logo',
            children: 'https://zos.alipayobjects.com/rmsportal/qqaimmXZVSwAhpL.svg',
          },
          childWrapper: {
            className: 'slogan',
            children: [
              {
                name: 'content0',
                children: 'Business credit cards made awesome.',
              },
            ],
          },
        },
        {
          name: 'block1',
          xs: 24,
          md: 6,
          className: 'block',
          title: {
            children: 'Platform',
          },
          childWrapper: {
            children: [
              {
                name: 'link0',
                href: '#',
                children: 'Budget',
              },
              {
                name: 'link1',
                href: '#',
                children: 'Expenses',
              },
              {
                name: 'link2',
                href: '#',
                children: 'People & Team',
              },
              {
                name: 'link3',
                href: '#',
                children: 'Virtual cards',
              },
              {
                name: 'link4',
                href: '#',
                children: 'Rewards',
              },
            ],
          },
        },
        {
          name: 'block2',
          xs: 24,
          md: 6,
          className: 'block',
          title: {
            children: 'Company',
          },
          childWrapper: {
            children: [
              {
                href: '#',
                name: 'link0',
                children: 'Security',
              },
              {
                href: '#',
                name: 'link1',
                children: 'Contact us',
              },
              {
                href: '#',
                name: 'link2',
                children: 'Terms & Conditions',
              },
              {
                href: '#',
                name: 'link3',
                children: 'Privacy Policy',
              },
            ],
          },
        },
        {
          name: 'block3',
          xs: 24,
          md: 6,
          className: 'block',
          title: {
            children: 'Follow us',
          },
          childWrapper: {
            children: [
              {
                href: '#',
                name: 'link0',
                children: 'Facebook',
              },
              {
                href: '#',
                name: 'link1',
                children: 'Twitter',
              },
              {
                href: '#',
                name: 'link2',
                children: 'LinkedIn',
              },
            ],
          },
        },
      ],
    },
    copyrightWrapper: {
      className: 'copyright-wrapper',
    },
    copyrightPage: {
      className: 'home-page',
    },
    copyright: {
      className: 'copyright',
      children: '<span>©2019 by <a href="https://www.macnov.com">Macnov</a> All Rights Reserved</span>',
    },
  },
};
