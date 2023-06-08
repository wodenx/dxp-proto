# Stackbit

## GitCMS

Git CMS is available using the following versions:
@stackbit/cms-git@0.0.50-gitcms.12
@stackbit/types@0.1.11-gitcms.1
@stackbit/cli@0.2.82-gitcms.13
Please note that we expect to continue to release new versions until we reach a production version in the next week.
A good repository for reference on how to use GitContentSource can be found [here](https://github.com/davbree/ts-mui-nextjs-starter-1f6d8/blob/master/stackbit.config.ts#L21)

A few other notes:
Local dev:
You'll get the full git-cms behavior without committing or pushing any changes to the repo. The assumption is that locally the developer would like to manage git themselves. This is also how it worked with legacy git-cms as well.
Container/Cloud:
If you would like to preview this in a cloud container (before next week) please let us know the project ID you've created a repo from and we will upgrade the container manually for you.
General:
If at any point we need to release a version to production, we can do that within a few hours so if you run into issues please let us know and we address them promptly.
Publishing
We currently only support a "cherry picking" method  where we copy selected files to a separate branch and merge them into main and preview.  This is also the area we would like to start to partner on and defined publishing workflows best suited for Kenvue.
When the user selects all outstanding changes to publish we do a regular merge.
Currently only available in the container/cloud

## Stackbit and Bodiless Data

Stackbit page data are stored in `src/data/pages/{slug}/index.json` and
are thus available in the Bodiless store at node key `Page$index`.

The pattern is for any component to use the data at the index which it
understands, and pass the remainder on to its children by creating default
content at a new `index` node belonging to its child.  For example, the
generic template uses no data of its own, but passes all on to its children
at `Page$top-content$index`, `Page$main-content$index`, etc.

There are 2 HOC's which should be used to facilitate this:

- `withSbContentFromParent` is used to pass data on to a child.  It should
  be invoked "inside" (*before* in a `flowHoc`) the `Schema`
  domain so that the child node keys re already assigned.
- `withSbContent` is used to transform content from the index of the
  current node for use by the component which owns that node.
In general a component will use `withSbContent` to transform the content
it will render itself, and then apply `withSbContentFromParent` to its
child components, to pass on the content it does not know how to render.

Examples are in `dxpGenericTemplate.ts`, `NodeTreePrinter.ts` and `dxpEditorPlain.ts`.

## Stackbit Models

- These should live close to the components which consume them
- Wherever possible, the field names should match the names of the nodeKeys to
  which the data are passed in Bodiless or, for components which actually render
  the data, the names of the keys in that component's data schema (eg "text" for
  plain editable). This will minimize the need for data transformers.
- For sitewide data, use stackbit "data" type models. Probably we'll want to use
  a similar pattern with `index` nodeKeys passed down, but still investigating
  this.
- Example `GenericTemplateModel.ts`
