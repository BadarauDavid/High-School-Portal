package com.example.backend.model;

import jakarta.persistence.Embeddable;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Embeddable
public class UserDetails {
    private String name;
    private String email;
    private String password;
}
