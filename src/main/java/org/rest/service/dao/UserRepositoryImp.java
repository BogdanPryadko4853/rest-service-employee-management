package org.rest.service.dao;


import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.rest.service.entity.User;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class UserRepositoryImp implements UserRepository {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<User> getAll() {
        return entityManager.createQuery("select distinct a from User a left join fetch a.roles", User.class).getResultList();
    }

    //Добавление user
    @Override
    public void addUser(User user) {
        entityManager.persist(user);
    }

    //перезаписать user
    @Override
    public void updateUser(User user) {
        entityManager.merge(user);
    }

    //Удаление user
    @Override
    public void deleteUser(long id) {
        User user = entityManager.find(User.class, id);
        entityManager.remove(user);
    }

    @Override
    public User getUser(long id) {
        return entityManager.find(User.class, id);
    }

    @Override
    public User findByUsername(String username) {
        return entityManager.createQuery("select distinct a from User a left join fetch a.roles where a.username = :username", User.class)
                .setParameter("username", username).getSingleResult();
    }
}
