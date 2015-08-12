'use strict';

module.exports = {
  app: {
    title: 'Sean Emmer',
    description: 'Sean Emmer portfolio page',
    keywords: 'Sean, Emmer',
    googleAnalyticsTrackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID || 'GOOGLE_ANALYTICS_TRACKING_ID'
  },
  port: process.env.PORT || 3000,
  templateEngine: 'swig',
  logo: 'modules/core/img/brand/logo.png',
  favicon: 'modules/core/img/brand/favicon.ico'
};
