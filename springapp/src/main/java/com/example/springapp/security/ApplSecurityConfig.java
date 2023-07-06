package com.example.springapp.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AuthorizeHttpRequestsConfigurer;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.web.SecurityFilterChain;


@Configuration
@EnableWebSecurity
public class ApplSecurityConfig
{
  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http)
    throws Exception
  {
    return 
    
      (SecurityFilterChain)((HttpSecurity)((AuthorizeHttpRequestsConfigurer.AuthorizedUrl)((HttpSecurity)http.csrf().disable()).authorizeHttpRequests().antMatchers(new String[] { "/**" })).permitAll().and()).build();
  }
}