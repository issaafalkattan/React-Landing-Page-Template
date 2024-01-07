package com.intearn.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.Nullable;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CMRespDto<T> {
    private int code;
    private String message;
    private T data;

}
