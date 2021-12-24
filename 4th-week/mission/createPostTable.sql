create table post
(
    id         serial
        constraint post_pk
            primary key,
    user_id    int         not null,
    title      varchar(20) not null,
    content    text,
    created_at timestamp default now(),
    updated_at timestamp default now(),
    is_deleted boolean   default false
);

create unique index post_id_uindex
    on post (id);