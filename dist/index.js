"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function useFetch(instanceOptions) {
    const api = axios_1.default.create(instanceOptions);
    // Default response
    let success;
    let data;
    function formatResponse(res, status) {
        return {
            status,
            data: res
        };
    }
    // HTTP methods (CRUD)
    function GET(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data: res, status } = yield api.get(url);
                return formatResponse(res, status);
            }
            catch (error) {
                return formatResponse({ error: error.response.message }, error.response.status);
            }
        });
    }
    function POST(url, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data: res, status } = yield api.post(url, body);
                return formatResponse(res, status);
            }
            catch (error) {
                return formatResponse({ error: error.response.message }, error.response.status);
            }
        });
    }
    function DELETE(url, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data: res, status } = yield api.delete(url, body);
                return formatResponse(res, status);
            }
            catch (error) {
                return formatResponse({ error: error.response.message }, error.response.status);
            }
        });
    }
    function PATCH(url, body) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data: res, status } = yield api.patch(url, body);
                return formatResponse(res, status);
            }
            catch (error) {
                return formatResponse({ error: error.response.message }, error.response.status);
            }
        });
    }
    return { GET, POST, DELETE, PATCH };
}
exports.default = useFetch;
