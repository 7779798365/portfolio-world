# API Contracts - Muhammad Moosa Portfolio

## Overview
This document defines the API contracts between frontend and backend for seamless integration.

## Current Mock Data Location
- **File**: `/app/frontend/src/data/mock.js`
- **Mock Function**: `submitContactForm(formData)` - simulates form submission

## Backend Implementation Requirements

### 1. Contact Form Submission API

**Endpoint**: `POST /api/contact`

**Request Body**:
```json
{
  "name": "string (required, min 2 chars)",
  "email": "string (required, valid email format)",
  "subject": "string (required, min 5 chars)",
  "message": "string (required, min 10 chars)"
}
```

**Response Success (200)**:
```json
{
  "success": true,
  "message": "Message sent successfully!",
  "id": "generated_message_id"
}
```

**Response Error (400/500)**:
```json
{
  "success": false,
  "error": "Error message description"
}
```

**MongoDB Collection**: `contact_messages`

**Document Schema**:
```python
{
  "id": "uuid string",
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string",
  "timestamp": "datetime (UTC)",
  "read": "boolean (default: false)"
}
```

## Frontend Integration Points

### File to Update: `/app/frontend/src/components/Contact.jsx`

**Current Implementation**:
```javascript
import { submitContactForm } from '../data/mock';
// ...
const result = await submitContactForm(formData);
```

**New Implementation**:
```javascript
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// In handleSubmit function:
const response = await axios.post(`${API}/contact`, formData);
const result = response.data;
```

**Error Handling**:
- Catch network errors
- Display user-friendly error messages
- Handle validation errors from backend

## Implementation Checklist

### Backend Tasks:
- [ ] Create Pydantic model for ContactMessage
- [ ] Add POST `/api/contact` endpoint in server.py
- [ ] Implement MongoDB storage logic
- [ ] Add input validation
- [ ] Add error handling
- [ ] Test with curl

### Frontend Tasks:
- [ ] Update Contact.jsx to use real API
- [ ] Remove mock.js import from Contact.jsx
- [ ] Add proper error handling
- [ ] Test form submission
- [ ] Verify success/error messages display correctly

## Testing Strategy

1. **Backend Testing**: Use curl to test endpoint
   ```bash
   curl -X POST http://localhost:8001/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@test.com","subject":"Test","message":"Test message"}'
   ```

2. **Frontend Testing**: Fill and submit contact form in browser

3. **Database Verification**: Check MongoDB for stored messages

## Notes
- Backend must be restarted after changes if hot reload doesn't pick them up
- Frontend will automatically hot reload on file changes
- All validation should be done on both frontend and backend
