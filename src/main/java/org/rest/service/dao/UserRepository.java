package org.rest.service.dao;


import org.rest.service.entity.User;

import java.util.List;

public interface UserRepository {

    public List<User> getAll();
    public void addUser(User user);
    public void updateUser(User user);
    public void deleteUser(long id);
    public User getUser(long id);
    public User findByUsername(String username);
}
