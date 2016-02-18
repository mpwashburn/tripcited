  module API
    class ContentsController < ApplicationController

      def index
        render json: Content.all
      end

      def show
        render json: Content.find(params[:id])
      end

      def create
        content = Content.new(content_params)

        if content.save
          render json: content, status: 201, location: [:api, content]
        else
          render json: content.errors, status: 422
        end
      end

      def update
        content = Content.find(params[:id])
        if content.update(content_params)
          head 204
        else
          render json: content.errors, status: 422
        end
      end

      def destroy
        content = Content.find(params[:id])
        content.destroy
        head 204
      end

      private
      def content_params
        params.require(:content).permit(:title, :image_link, :upvotes, :downvotes, :body, :source)
      end

    end
  end
