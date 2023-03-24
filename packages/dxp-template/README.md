# --DXP--

## Content Publish

1. CI Configuration

    Repository secrets are used to authenticate GitHub API calls. The following secrets are required:
    - CONTENT_PUBLISH_GIT_USERNAME: GitHub username
    - CONTENT_PUBLISH_GIT_PASSWORD: GitHub personal access token (PWT)


    *Optional environment variables:*
    - CONTENT_PUBLISH_TEMP_PATH_PREFIX: Temporary directory path prefix. Default is empty string.
    - CONTENT_PUBLISH_AUTHOR_NAME: Git author name. Default as `dxp-proto`.
    - CONTENT_PUBLISH_AUTHOR_EMAIL: Git author email. Default as `dxp-proto@kenvue.com`.
    - CONTENT_PUBLISH_GIT_BRANCH: Git base branch to publish content to. Default to `content-publish`.

    *Other task related environment variables:*

      - Content publish process may involve service integration with other platforms, e.g. Contentful. It might require additional environment variables to be configured. For example, the Contentful space ID and Contentful access token are required to configure the remote API calls.

1. ### Content Publish Script
    Content publish script is a script that automatically publishes content to the DXP production branch. It is invoked by a GitHub action that runs on a repository dispatch event. 

    The dispatch event can be triggered by GitHub API `dispatches` endpoint, with `event-type` specified as API request body parameter. For example, the following curl command will trigger the script for product content publishing:

    ```bash
    curl -L \
      -X POST \
      -H "Accept: application/vnd.github+json" \
      -H "Authorization: Bearer <ACCESS-TOKEN>"\
      -H "X-GitHub-Api-Version: 2022-11-28" \
      https://api.github.com/repos/OWNER/REPO/dispatches \
      -d '{"event_type":"product-publish"}'
    ```

    For more information, see [GitHub API documentation](https://docs.github.com/en/rest/reference/repos#create-a-repository-dispatch-event).

1. ### Contentful Webhook Setup

    The content data hosted on Contentful platform can be delivered to DXP via a webhook. The webhook is configured to send a POST request to the GitHub REST API endpoint, which will trigger content publish action when the content is published on Contentful. The script will then publish the content to the DXP production branch.

    For more information, see [Contentful Webhook documentation](https://www.contentful.com/developers/docs/concepts/webhooks/).