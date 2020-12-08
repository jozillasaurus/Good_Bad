# Good_Bad

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**Review Everything** is an application where you are able to review anything and anyone. There is no limit to who, what, when, where, and why you can create and leave a review for.

<br>

## MVP

The **Review Everything** MVP

- Sign in/ Register as a user
- Create, Edit, delete review post
- Post comment to the review

<br>

### Goals

- Full functional app with CRUD functionality

<br>

### Libraries and Dependencies

|    Library    | Description                          |
| :-----------: | :----------------------------------- |
|     React     | Front End                            |
| React Router  | Front End Routes and Links           |
| Ruby on Rails | Back End                             |
| RoR gem 'jwt' | Back End- Token based authentication |

<br>

### Client (Front End)

#### Wireframes

[Desktop](https://josiasdelatorre542515.invisionapp.com/freehand/Yoop-desktop-y96IhoTt2)

- Tablet Resource Index

[Mobile](https://josiasdelatorre542515.invisionapp.com/freehand/Yoop-mobile-8cQ4q0Dyh)

#### Component Hierarchy

```structure

src
|__ components/
      |__ Nav.jsx
      |__ Hamburger.jsx
      |__ Post.jsx
|__ screens/
      |__ Homepage.jsx
      |__ CreateReview.jsx
      |__ Review.jsx
      |__ AddReview.jsx
      |__ EditReview.jsx
      |__ AboutUs.jsx
      |__ Login.jsx
      |__ SignUp.jsx
|__ services/

```

#### Component Tree

[Component tree](https://whimsical.com/PxsUkyJKnWS6fDFYjdtVHJ)

#### Time Estimates

| Task                     | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------ | :------: | :------------: | :-----------: | :---------: |
| Back End                 |    H     |     4 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions      |    H     |     4 hrs      |     1 hrs     |    4 hrs    |
| Sign Up/Sign In pages    |    H     |     3 hrs      |     1 hrs     |    3 hrs    |
| Token Authentication     |    H     |     4 hrs      |     1 hrs     |   18 hrs    |
| Build Nav and Hamburger  |    H     |     4 hrs      |     1 hrs     |    2 hrs    |
| Create HomePage          |    H     |     2 hrs      |     1 hrs     |    2 hrs    |
| Create Review Components |    H     |     4 hrs      |     1 hrs     |    3 hrs    |
| Create CRUD Actions      |    H     |     4 hrs      |     1 hrs     |    3 hrs    |
| About Page               |    H     |     2 hrs      |     1 hrs     |    1 hrs    |
| CSS                      |    H     |     5 hrs      |     1 hrs     |    2 hrs    |
| TOTAL                    |          |     36 hrs     |     3 hrs     |     TBD     |

<br>

### Server (Back End)

#### [ERD Model](https://drive.google.com/file/d/1VxEgfK6yrAuUqCA6REF8pXASR6QU1VV5/view?usp=sharing)

<br>

---

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

---

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
