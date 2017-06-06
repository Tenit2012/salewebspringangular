package com.nlu.chuyendeweb.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Footer for website
 * 
 * @author Cau Ut Mien Tay
 *
 */
@Entity
@Table(name = "cdw_footer")
public class Footers {
	@Id
	@GeneratedValue
	private long id;
	private String content;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

}
