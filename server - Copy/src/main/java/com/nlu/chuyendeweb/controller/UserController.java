package com.nlu.chuyendeweb.controller;

import java.io.IOException;
import java.security.Principal;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nlu.chuyendeweb.customobject.UserResponse;
import com.nlu.chuyendeweb.model.ApplicationUser;
import com.nlu.chuyendeweb.service.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<ApplicationUser> createUser(@RequestBody ApplicationUser appUser) {
//		if (userService.findOneByUsername(appUser.getUsername()) != null) {
//			throw new RuntimeException("Username already exist");
//		}
//		List<String> roles = new ArrayList<>();
//		roles.add("USER");
//		appUser.setRoles(roles);
//		return new ResponseEntity<AppUser>(appUserRepository.save(appUser), HttpStatus.CREATED);
		return null;
	}

	/**
	 * This method will return the logged user.
	 * 
	 * @param principal
	 * @return Principal java security principal object
	 */
	@RequestMapping("/api/users")
	public List<ApplicationUser> getAll() {
		return userService.getAll();
	}

	/**
	 * @param username
	 * @param password
	 * @param response
	 * @return JSON contains token and user after success authentication.
	 * @throws IOException
	 */
	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<Map<String, Object>> login(@RequestParam String username, @RequestParam String password,
			HttpServletResponse response) throws IOException {
		String token = null;
		UserResponse userResponse = userService.getUserResponse(username,password);
		Map<String, Object> tokenMap = new HashMap<String, Object>();
		if (userResponse != null) {
			token = Jwts.builder().setSubject(username).claim("roles", userResponse.getAppRole()).setIssuedAt(new Date())
					.signWith(SignatureAlgorithm.HS256, "secretkey").compact();
			tokenMap.put("token", token);
			tokenMap.put("user", userResponse);
			return new ResponseEntity<Map<String, Object>>(tokenMap, HttpStatus.OK);
		} else {
			tokenMap.put("token", null);
			return new ResponseEntity<Map<String, Object>>(tokenMap, HttpStatus.UNAUTHORIZED);
		}

	}
}
