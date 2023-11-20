create table
  public.user_info (
    id uuid not null,
    created_at timestamp with time zone null default now(),
    paid boolean not null default false,
    trained boolean not null default false,
    in_training boolean not null default false,
    start_training timestamp without time zone null,
    end_training timestamp without time zone null,
    replicate_model_id text null,
    instance_class text null,
    replicate_version_id text null,
    replicate_train_status text null,
    counter bigint not null default '0'::bigint,
    Alias text null,
    demo_counter bigint not null default '0'::bigint,
    constraint user_info_pkey primary key (id),
    constraint user_info_id_fkey foreign key (id) references auth.users (id)
  ) tablespace pg_default;


create table
  public.predictions (
    id text not null,
    user_id uuid not null,
    status text null,
    completed_at timestamp with time zone null,
    created_at timestamp with time zone not null default now(),
    constraint predictions_pkey primary key (id),
    constraint predictions_user_id_fkey foreign key (user_id) references auth.users (id)
  ) tablespace pg_default;


create table
  public.photos (
    id bigint generated by default as identity not null,
    created_at timestamp with time zone null default now(),
    uid uuid not null,
    name text not null,
    constraint test_pkey primary key (id),
    constraint photos_uid_fkey foreign key (uid) references auth.users (id)
  ) tablespace pg_default;



You need two buckets : 

Photos-for-training , photos-generated


Stripe :

https://avatarify-ai.com/api/webhooks/payment ( Stripe Hook )

you need to send this event "checkout.session.completed" to your webhook

