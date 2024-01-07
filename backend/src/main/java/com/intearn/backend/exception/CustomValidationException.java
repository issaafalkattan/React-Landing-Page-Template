package com.intearn.backend.exception;

import java.util.Map;

public class CustomValidationException extends RuntimeException {
    private Map<String, String> errorMap;

    public CustomValidationException(String message) {
        super(message);
    }

    public CustomValidationException(String message, Map<String, String> errorMap) {
        super(message);
        this.errorMap = errorMap;
    }
}
