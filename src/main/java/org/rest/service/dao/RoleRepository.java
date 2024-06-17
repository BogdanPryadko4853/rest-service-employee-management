package org.rest.service.dao;



import org.rest.service.entity.Role;

import java.util.List;


public interface RoleRepository {

    public List<Role> getAllRoles();
    public List<Role> findByIdRoles(List<Long> id);
}
