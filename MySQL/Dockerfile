FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=powerflex
ENV MYSQL_USER=powerflex
ENV MYSQL_PASSWORD=powerflex

ADD DLL.sql /docker-entrypoint-initdb.d

EXPOSE 3306
