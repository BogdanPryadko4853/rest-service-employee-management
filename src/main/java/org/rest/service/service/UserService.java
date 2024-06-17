package org.rest.service.service;


import org.rest.service.entity.User;

import java.util.List;

public interface UserService {
    public List<User> getAll();
    public User getById(long id);
    public void deleteUser(long id);
    public void saveUser(User user);
    public void updateUser(User user);
    public User findByUsername(String username);
}
