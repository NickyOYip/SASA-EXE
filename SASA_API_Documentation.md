# SASA Hong Kong E-commerce API Documentation

## Overview
This document outlines all the API endpoints discovered from the SASA Hong Kong website (www.sasa.com.hk) configuration and their expected outputs.

## API Configuration
- **Shop ID**: 17
- **Environment**: Production (prod)
- **Primary Domain**: www.sasa.com.hk
- **Fetch Timeout**: 8000ms
- **Machine Name**: catalog-5789fb8c49-8z2gm

---

## Core API Hosts

### 1. Main Web API Host
- **URL**: `https://webapi.91app.hk/`
- **Type**: Server API Host
- **Purpose**: Primary backend API for all shop operations

### 2. CDN API Host
- **URL**: `https://webapi.91app.hk/`
- **Type**: CDN-enabled API
- **Purpose**: Content delivery optimized API calls
- **Status**: Enabled (`isEnableCdnApi: true`)

### 3. Client API Host
- **URL**: `/` (Relative path)
- **Type**: Client-side API
- **Purpose**: Frontend API calls

### 4. BFF (Backend for Frontend) Host
- **URL**: `https://apigw.91app.hk`
- **Type**: API Gateway
- **Purpose**: Microservices orchestration and API gateway

### 5. FTS (Full Text Search) Host
- **URL**: `https://apigw.91app.hk/cms/v1`
- **Type**: CMS API
- **Purpose**: Content management and search functionality

### 6. FTS Temporary Host
- **URL**: `https://fts-api.91app.hk`
- **Type**: Search API
- **Purpose**: Alternative search service endpoint

---

## Image & Media APIs

### 1. CMS Image CDN
- **URL**: `https://cms.cdn.91app.hk/`
- **Paths**:
  - Content Images: `contents/images`
  - Icons: `contents/ico`
  - Original Images: `images/original/`
- **Purpose**: Static content delivery

### 2. Main Image CDN
- **URL**: `https://img.cdn.91app.hk/`
- **Purpose**: Product images, logos, favicons
- **Sample Endpoints**:
  - Desktop Logo: `/webapi/images/s/ShopOfficialDesktopLayoutLogo/17/17logo?v=202507011057`
  - Mobile Logo: `/webapi/images/s/ShopOfficialMobileLayoutLogo/17/17logo?v=202507011057`
  - Favicon: `/webapi/images/o/16/16/ShopFavicon/17/17favicon?v=202507011057`
  - App Icon: `/webapi/images/t/512/512/ShopIcon/17/0/07021406`

---

## Expected API Endpoints & Outputs

### Product APIs
Based on the shop configuration, these endpoints likely exist:

#### 1. Product Catalog
- **Endpoint**: `GET /api/products`
- **Expected Output**:
```json
{
  "products": [
    {
      "id": "string",
      "name": "string",
      "price": "number",
      "currency": "HKD",
      "category": "string",
      "inventory": "number",
      "images": ["string"],
      "isAdult": "boolean",
      "stockStatus": "InStock|OutOfStock|Restocking"
    }
  ],
  "pagination": {
    "page": "number",
    "totalPages": "number",
    "totalProducts": "number"
  }
}
```

#### 2. Product Search
- **Endpoint**: `GET /api/search`
- **Expected Output**:
```json
{
  "query": "string",
  "results": [
    {
      "productId": "string",
      "name": "string",
      "relevanceScore": "number",
      "category": "string",
      "price": "number"
    }
  ],
  "filters": {
    "categories": ["string"],
    "priceRange": {"min": "number", "max": "number"},
    "brands": ["string"]
  }
}
```

### Shopping Cart APIs

#### 1. Add to Cart
- **Endpoint**: `POST /api/cart/add`
- **Expected Output**:
```json
{
  "success": "boolean",
  "cartId": "string",
  "itemCount": "number",
  "totalPrice": "number",
  "currency": "HKD",
  "message": "Successfully added" | "Add to cart failed"
}
```

#### 2. Cart Contents
- **Endpoint**: `GET /api/cart`
- **Expected Output**:
```json
{
  "cartId": "string",
  "items": [
    {
      "productId": "string",
      "quantity": "number",
      "unitPrice": "number",
      "totalPrice": "number"
    }
  ],
  "subtotal": "number",
  "shipping": "number",
  "total": "number",
  "currency": "HKD"
}
```

### User Account APIs

#### 1. User Profile
- **Endpoint**: `GET /api/user/profile`
- **Expected Output**:
```json
{
  "userId": "string",
  "email": "string",
  "name": "string",
  "membershipLevel": "Regular|VIP",
  "points": "number",
  "addresses": [
    {
      "id": "string",
      "type": "shipping|billing",
      "address": "string",
      "isDefault": "boolean"
    }
  ]
}
```

#### 2. Order History
- **Endpoint**: `GET /api/user/orders`
- **Expected Output**:
```json
{
  "orders": [
    {
      "orderId": "string",
      "orderDate": "ISO 8601 date",
      "status": "Processing|Shipped|Delivered|Cancelled",
      "total": "number",
      "currency": "HKD",
      "items": [
        {
          "productId": "string",
          "quantity": "number",
          "price": "number"
        }
      ]
    }
  ]
}
```

### Wishlist APIs

#### 1. Wishlist Contents
- **Endpoint**: `GET /api/wishlist`
- **Expected Output**:
```json
{
  "wishlistId": "string",
  "items": [
    {
      "productId": "string",
      "addedDate": "ISO 8601 date",
      "availability": "Available|OutOfStock"
    }
  ],
  "totalItems": "number"
}
```

### Store Location APIs

#### 1. Store Locator
- **Endpoint**: `GET /api/stores`
- **Expected Output**:
```json
{
  "stores": [
    {
      "storeId": "string",
      "name": "string",
      "address": "string",
      "coordinates": {
        "lat": "number",
        "lng": "number"
      },
      "hours": "string",
      "services": ["pickup", "delivery"],
      "inventory": "boolean"
    }
  ],
  "totalStores": 86
}
```

### Promotion APIs

#### 1. Active Promotions
- **Endpoint**: `GET /api/promotions`
- **Expected Output**:
```json
{
  "promotions": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "type": "discount|coupon|gift",
      "startDate": "ISO 8601 date",
      "endDate": "ISO 8601 date",
      "status": "active|ending_soon|latest"
    }
  ]
}
```

### Inventory APIs

#### 1. Stock Alert
- **Endpoint**: `POST /api/inventory/alert`
- **Expected Output**:
```json
{
  "success": "boolean",
  "productId": "string",
  "email": "string",
  "message": "Will be notified when ordering" | "Cancelled Notification"
}
```

---

## Third-Party Integration APIs

### Google Analytics & Conversion Tracking
- **GA4 Tracking ID**: G-F5G3FB0YLB
- **Universal Analytics**: UA-142058851-34
- **GTM Container**: GTM-NGH8LM9
- **Conversion Tracking IDs**: 1072250739, 11277556466

### Facebook Integration
- **App ID**: 2779871488829323
- **Pixel IDs**: 346752956483935, 1132352503852542, 331556822686479, 356557760829399, 179374565081636
- **Fan Page**: https://www.facebook.com/sasahongkong/

### reCAPTCHA
- **Site Key**: 6LeG7kAkAAAAAK-S4OlhypI8Vhg5XYz9vvTV2Lho
- **Purpose**: Anti-fraud protection

---

## Mobile App Integration

### App Download Links
- **iOS App ID**: 1551748743
- **Android Package**: hk.com.nineyi.shop.s000017
- **App Names**: "Sasa HK" (Both iOS & Android)

### Live Shopping
- **Live Buy Host**: `https://livebuy.tv`
- **Purpose**: Live streaming commerce integration

---

## Localization & Currency

### Supported Languages
- English (US): en-US
- Traditional Chinese (HK): zh-HK (Default)
- Traditional Chinese (TW): zh-TW
- Simplified Chinese: zh-CN
- Malay: ms-MY
- Japanese: ja-JP
- Thai: th-TH

### Supported Currencies
- Hong Kong Dollar: HKD (Default)
- Macau Pataca: MOP

### Market Settings
- **Sales Market**: HK
- **Sales Currency**: HKD

---

## Error Handling

### Common Error Responses
```json
{
  "error": {
    "code": "string",
    "message": "string",
    "details": "object"
  },
  "timestamp": "ISO 8601 date",
  "path": "string"
}
```

### Common Error Messages
- "System busy. Please try again."
- "Product not exist"
- "Sold Out"
- "Add to cart failed. Please try again later."
- "Express checkout failed, please refresh this page."

---

## Rate Limiting & Performance

- **Fetch Timeout**: 8000ms (8 seconds)
- **CDN Enabled**: Yes
- **Cache Control**: Implemented (`isClearCache: false`)

---

## Security Features

- **Anti-Fraud**: Enabled
- **reCAPTCHA Enterprise**: Enabled
- **Adult Content Verification**: Age restriction popup for 18+ products
- **Session Management**: Session expiry disabled but configurable

---

## Notes

1. All monetary values are in Hong Kong Dollars (HKD) unless specified
2. The system supports 86 physical store locations
3. Free shipping threshold appears to be HK$300
4. VIP membership requires HK$600 spending with 5% discount (95% pricing)
5. The platform is built on the 91APP e-commerce framework (version 3.68.6)
6. Multi-language support with automatic language detection disabled
7. The system supports both desktop and mobile layouts with responsive design

---

*This documentation is based on the configuration data extracted from the SASA Hong Kong website. Actual API endpoints may vary and should be verified through proper API documentation or testing.*
