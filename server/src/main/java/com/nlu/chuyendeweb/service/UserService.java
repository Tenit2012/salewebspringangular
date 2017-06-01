package com.nlu.chuyendeweb.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nlu.chuyendeweb.customobject.UserResponse;
import com.nlu.chuyendeweb.model.ApplicationRole;
import com.nlu.chuyendeweb.model.ApplicationUser;
import com.nlu.chuyendeweb.reponsitory.RoleReponsitory;
import com.nlu.chuyendeweb.reponsitory.UserReponsitory;

@Service
public class UserService {
	@Autowired
	UserReponsitory reponsitory;
	@Autowired 
	RoleReponsitory roleReponsitory;

	public ApplicationUser getUser(String username, String passWord) {
		return reponsitory.getUser(username, passWord);
	}
	public ApplicationUser findOneByUsername(String username) {
		return reponsitory.findOneByUsername(username);
	}
	public List<ApplicationUser> getAll() {
		return reponsitory.findAll();
	}
	public UserResponse getUserResponse(String userName,String password){
		ApplicationUser appUser = getUser(userName,password);
		UserResponse userResponse = new UserResponse();
		userResponse.setAppUser(appUser);
		List<String> lstRole = new ArrayList<String>();
		if(appUser != null){
			List<ApplicationRole> role = roleReponsitory.getListRole(appUser.getId());
			if(null != role){
				for (ApplicationRole obj : role) {
					lstRole.add(obj.getName());
				}
				userResponse.setAppRole(lstRole);
			}
		}
		return userResponse;
	}
}
