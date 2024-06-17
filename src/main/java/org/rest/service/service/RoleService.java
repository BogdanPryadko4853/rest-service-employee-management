package org.rest.service.service;



import org.rest.service.entity.Role;

import java.util.List;

public interface RoleService {
    public List<Role> getAllRoles();
    public List<Role> findByIdRoles(List<Long> id);
}
