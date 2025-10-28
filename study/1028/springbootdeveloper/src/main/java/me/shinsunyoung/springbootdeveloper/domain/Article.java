package me.shinsunyoung.springbootdeveloper.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "content", nullable = false)
    private String content;

    @Builder
    public Article(String title, String content) {
        this.title = title;
        this.content = content;

        // 생성자
//        AObject a = new AObject("title", "content");

        // data mapping
//        AObject a = new AObject();
//        a.setTitle(title);
//        a.setContent(content);

        // builder
//        AObject.builder()
//                .title(title)
//                .content(content)
//                .build()
    }

//    protected Article() {
//
//    }

//    public Long getId() {
//        return id;
//    }
//
//    public String getTitle() {
//        return title;
//    }
//
//    public String getContent() {
//        return content;
//    }
}
