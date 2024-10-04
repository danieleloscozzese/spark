import { Button } from '@spark-ui/button'
import { Search } from '@spark-ui/icons/dist/icons/Search'
import { Input, InputGroup } from '@spark-ui/input'
import React from 'react'

export const A11yInput = () => (
  <section>
    <div>
      <Input aria-label="Phone type" placeholder="Type here..." />
    </div>

    <div>
      <InputGroup className="max-w-sz-320">
        <InputGroup.LeadingIcon>
          <Search />
        </InputGroup.LeadingIcon>

        <Input aria-label="Searcher" />

        <InputGroup.ClearButton aria-label="Clear value" />

        <InputGroup.TrailingAddon asChild>
          <Button design="contrast">Search</Button>
        </InputGroup.TrailingAddon>
      </InputGroup>
    </div>
  </section>
)