import component from './index';

import less from '!raw-loader!./index.less';
import templateStr from '!raw-loader!./index';

export default {
  component,
  templateStr,
  less,
  dataSource: {
    wrapper: {
      className: 'header3 home-page-wrapper',
    },
    page: {
      className: 'home-page',
    },
    logo: {
      className: 'header3-logo',
      children: 'data:image/png;base64,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',
    },
    Menu: {
      className: 'header3-menu',
      children: [
        {
          name: 'item0',
          className: 'header3-item',
          children: {
            href: '#',
            children: [
              {
                children: 'Banking Features',
                name: 'text',
              },
            ],
          },
          subItem: [
            {
              name: 'sub0',
              className: 'item-sub',
              children: {
                className: 'item-sub-item',
                children: [
                  {
                    name: 'image0',
                    className: 'item-image',
                    children: 'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                  },
                  {
                    name: 'title',
                    className: 'item-title',
                    children: 'Ant Design',
                  },
                  {
                    name: 'content',
                    className: 'item-content',
                    children: '企业级 UI 设计体系',
                  },
                ],
              },
            },
            {
              name: 'sub1',
              className: 'item-sub',
              children: {
                className: 'item-sub-item',
                children: [
                  {
                    name: 'image0',
                    className: 'item-image',
                    children: 'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                  },
                  {
                    name: 'title',
                    className: 'item-title',
                    children: 'Ant Design',
                  },
                  {
                    name: 'content',
                    className: 'item-content',
                    children: '企业级 UI 设计体系',
                  },
                ],
              },
            },
          ],
        },
        {
          name: 'item1',
          className: 'header3-item',
          children: {
            href: '#',
            children: [
              {
                children: 'Help',
                name: 'text',
              },
            ],
          },
        },
      ],
    },
    mobileMenu: {
      className: 'header3-mobile-menu',
    },
  },
};
