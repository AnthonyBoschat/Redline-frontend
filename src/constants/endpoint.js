const API_BASE_URL = import.meta.env.VITE_PUBLIC_API_URL || 'http://localhost:3000/api';

export const ENDPOINTS = Object.freeze({
    login: "/auth/login"
});

export const buildEndpoint = (endpoint) => `${API_BASE_URL}${endpoint}`;

export default ENDPOINTS;