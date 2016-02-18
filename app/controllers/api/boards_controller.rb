  module API
    class BoardsController < ApplicationController

      def index
        render json: Board.all
      end

      def show
        render json: Board.find(params[:id])
      end

      def create
        board = Board.new(board_params)

        if board.save
          render json: board, status: 201, location: [:api, board]
        else
          render json: board.errors, status: 422
        end
      end

      def update
        board = Board.find(params[:id])
        if board.update(board_params)
          head 204
        else
          render json: board.errors, status: 422
        end
      end

      def destroy
        board = Board.find(params[:id])
        board.destroy
        head 204
      end

      private
      def board_params
        params.require(:board).permit(:title, :date)
      end

    end
  end
