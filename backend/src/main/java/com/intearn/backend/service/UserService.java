package com.intearn.backend.service;

import com.intearn.backend.domain.User;
import com.intearn.backend.dto.UserDto;
import com.intearn.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    @Transactional
    public List<UserDto.Response> getAllUsers() {
        return userRepository.findAll().stream()
                .map(user -> new UserDto.Response(user))
                .collect(Collectors.toList());
    }

    @Transactional
    public UserDto.Response getUser(Long userId) {
        User user = userRepository.findById(userId).orElseThrow();
        return new UserDto.Response(user);
    }

    @Transactional
    public void saveUser(UserDto.SignUpForm signUpForm) {
        if (!signUpForm.getPassword().equals(signUpForm.getRePassword())) {
            throw new RuntimeException("비밀번호가 일치하지 않습니다.");
        }
        userRepository.save(signUpForm.toEntity());
    }
}
