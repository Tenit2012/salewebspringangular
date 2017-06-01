package com.nlu.chuyendeweb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nlu.chuyendeweb.model.ApplicationRole;
import com.nlu.chuyendeweb.reponsitory.RoleReponsitory;

@Service
public class RoleService {
	@Autowired
	RoleReponsitory roleReponsitory;
	
	public ApplicationRole getRoleById(long roleId){
		return roleReponsitory.getOne(roleId);
	}

}
