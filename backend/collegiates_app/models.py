# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AdminAccount(models.Model):
    admin_id = models.AutoField(primary_key=True)
    username = models.CharField(unique=True, max_length=20)
    pword = models.CharField(max_length=32)
    email = models.CharField(unique=True, max_length=255)

    class Meta:
        managed = False
        db_table = 'admin_account'


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class BlogPost(models.Model):
    post_id = models.AutoField(primary_key=True)
    category = models.CharField(max_length=128)
    title = models.CharField(unique=True, max_length=128)
    author = models.CharField(max_length=128, blank=True, null=True)
    post_content = models.TextField()
    date_posted = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'blog_post'


class College(models.Model):
    college_id = models.AutoField(primary_key=True)
    college_name = models.CharField(unique=True, max_length=255)
    def __str__(self):
        return self.college_name

    class Meta:
        managed = False
        db_table = 'college'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.SmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Nandu(models.Model):
    nandu_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('UserAccount', models.DO_NOTHING)
    comp_year = models.IntegerField()
    nandu_string = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'nandu'


class RegisteredEvents(models.Model):
    events_id = models.AutoField(primary_key=True)
    user = models.ForeignKey('UserAccount', models.DO_NOTHING)
    comp_year = models.IntegerField()
    register_date = models.DateTimeField()
    paid = models.BooleanField()
    changquan = models.BooleanField(blank=True, null=True)
    nanquan = models.BooleanField(blank=True, null=True)
    changquan_nandu = models.BooleanField(blank=True, null=True)
    nanquan_nandu = models.BooleanField(blank=True, null=True)
    b_sword = models.BooleanField(blank=True, null=True)
    s_sword = models.BooleanField(blank=True, null=True)
    nandao = models.BooleanField(blank=True, null=True)
    staff = models.BooleanField(blank=True, null=True)
    spear = models.BooleanField(blank=True, null=True)
    nangun = models.BooleanField(blank=True, null=True)
    o_bare = models.BooleanField(blank=True, null=True)
    o_weapon = models.BooleanField(blank=True, null=True)
    taiji_24 = models.BooleanField(blank=True, null=True)
    yang = models.BooleanField(blank=True, null=True)
    chen = models.BooleanField(blank=True, null=True)
    fist_42 = models.BooleanField(blank=True, null=True)
    sword_42 = models.BooleanField(blank=True, null=True)
    taiji_weapon = models.BooleanField(blank=True, null=True)
    int_o_weapon = models.BooleanField(blank=True, null=True)
    int_o_bare = models.BooleanField(blank=True, null=True)
    taiji_bare_nandu = models.BooleanField(blank=True, null=True)
    trad_bare = models.BooleanField(blank=True, null=True)
    trad_long = models.BooleanField(blank=True, null=True)
    trad_short = models.BooleanField(blank=True, null=True)
    trad_soft = models.BooleanField(blank=True, null=True)
    group_set = models.BooleanField(blank=True, null=True)
    group_set_id = models.BooleanField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'registered_events'


class Team(models.Model):
    team_id = models.AutoField(primary_key=True)
    comp_year = models.IntegerField()
    team_name = models.CharField(max_length=255)
    college = models.CharField(max_length=255)
    captain = models.ForeignKey('UserAccount', models.DO_NOTHING)
    member2 = models.ForeignKey('UserAccount', models.DO_NOTHING, related_name='team_member2_set')
    member3 = models.ForeignKey('UserAccount', models.DO_NOTHING, related_name='team_member3_set')
    member4 = models.ForeignKey('UserAccount', models.DO_NOTHING, related_name='team_member4_set')
    member5 = models.ForeignKey('UserAccount', models.DO_NOTHING, related_name='team_member5_set')
    member6 = models.ForeignKey('UserAccount', models.DO_NOTHING, related_name='team_member6_set')
    email = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'team'


class UserAccount(models.Model):
    user_id = models.AutoField(primary_key=True)
    username = models.CharField(unique=True, max_length=20)
    pword = models.CharField(max_length=32)
    first_name = models.TextField()
    last_name = models.TextField()
    email = models.CharField(unique=True, max_length=255)
    sex = models.CharField(max_length=1)
    birth_date = models.DateField()
    grad_date = models.DateField()
    college = models.ForeignKey(College, models.DO_NOTHING, db_column='college', to_field='college_name')
    student_type = models.CharField(max_length=1)
    class_type = models.CharField(max_length=1)
    xp = models.CharField(max_length=1)
    first_comp_year = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'user_account'
