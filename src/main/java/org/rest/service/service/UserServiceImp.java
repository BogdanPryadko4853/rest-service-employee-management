package org.rest.service.service;

import org.rest.service.dao.UserRepository;
import org.rest.service.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserServiceImp implements UserService{
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImp(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository =  userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional
    public List<User> getAll() {
        return userRepository.getAll();
    }

    @Transactional
    public User getById(long id) {
        return userRepository.getUser(id);
    }

    @Transactional
    public void deleteUser(long id) {
        userRepository.deleteUser(id);
    }

    @Transactional
    public void saveUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.addUser(user);
    }

    @Transactional
    public void updateUser(User user) {
        userRepository.updateUser(user);
    }

    @Transactional
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

}
