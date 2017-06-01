package com.nlu.chuyendeweb.reponsitory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.nlu.chuyendeweb.model.ApplicationRole;

public interface RoleReponsitory extends JpaRepository<ApplicationRole, Long> {
	@Query("select u from ApplicationRole u where u.userId = :userId")
	public List<ApplicationRole> getListRole(@Param("userId") long userId);
}
