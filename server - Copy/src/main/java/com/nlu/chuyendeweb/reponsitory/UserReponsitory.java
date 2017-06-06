package com.nlu.chuyendeweb.reponsitory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nlu.chuyendeweb.model.ApplicationUser;

public interface UserReponsitory extends JpaRepository<ApplicationUser, Long> {
	@Query("select u from ApplicationUser u where u.userName = :userName AND u.passWord = :passWord")
	public ApplicationUser getUser(@Param("userName") String userName, @Param("passWord") String passWord);
	
	@Query("select u from ApplicationUser u where u.userName = :userName")
	public ApplicationUser findOneByUsername(@Param("userName") String userName);
}
