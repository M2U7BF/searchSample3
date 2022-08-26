package com.example.searchSample3;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SampleUserRepository extends JpaRepository<SampleUser,Integer> {
    List<SampleUser> findAllByNameContaining(String searchText);
}
