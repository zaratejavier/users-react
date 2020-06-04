class UsersController < ApplicationController

  def index
    @users = User.all

    #serverside rendering way 
    render component: "Users", props:{users: @users, test:'yo'}

    #client side rendering way
    # render json: => @users
  end

  def create
    puts "in create"
    puts params
    @user = User.create(user_params)

    render json: @user
  end

  def show
    @user = User.find(params[:id])
    render component: "User", props: {user: @user }
  end 

  def destroy 
    @user = User.find(params[:id])
    @user.destroy

    render json: @user
  end


  private

  def user_params
    params.require(:user).permit(:f_name, :l_name)
  end
end
