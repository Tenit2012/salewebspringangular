package com.nlu.chuyendeweb.customobject;

import java.util.List;

import com.nlu.chuyendeweb.model.ApplicationUser;

public class UserResponse {
	ApplicationUser appUser;
	List<String> appRole;
	public ApplicationUser getAppUser() {
		return appUser;
	}
	public void setAppUser(ApplicationUser appUser) {
		this.appUser = appUser;
	}
	public List<String> getAppRole() {
		return appRole;
	}
	public void setAppRole(List<String> appRole) {
		this.appRole = appRole;
	}
	
	
	

}
